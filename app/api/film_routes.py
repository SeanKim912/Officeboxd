from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Film, db
from app.forms import FilmForm
from app.s3_helpers import (upload_file_to_s3, get_unique_filename)

film_routes = Blueprint('film', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@film_routes.route('/all')
def all_films():
    """
    Query for a list of all films in the database.
    """

    film_list = Film.query.all()
    film_arr = [film.to_dict() for film in film_list]

    return film_arr

@film_routes.route('/<int:id>')
@login_required
def film_details(id):
    film = Film.query.get(id)

    return film.to_dict()

@film_routes.route('/add', methods=['POST'])
@login_required
def add_film():
    form = FilmForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():

        poster = form["poster"].data
        poster.filename = get_unique_filename(poster.filename)
        upload = upload_file_to_s3(poster)

        if "url" not in upload:
            return upload, 400

        url = upload['url']


        still = form["still"].data
        still.filename = get_unique_filename(still.filename)
        upload2 = upload_file_to_s3(still)

        if "url" not in upload2:
            return upload2, 400

        url2 = upload2['url']

        new_film = Film(
            title=form["title"].data,
            year=form["year"].data,
            poster=url,
            still=url2,
            tagline=form["tagline"].data,
            synopsis=form["synopsis"].data,
            runtime=form["runtime"].data,
            director=form["director"].data,
            studio=form["studio"].data,
            genre=form["genre"].data,
            language=form["language"].data,
            country=form["country"].data,
            producer=form["producer"].data,
            writer=form["writer"].data,
            editor=form["editor"].data,
            cinematographer=form["cinematographer"].data
        )

        db.session.add(new_film)
        db.session.commit()

        return new_film.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
