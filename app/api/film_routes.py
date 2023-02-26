from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Film, db

film_routes = Blueprint('film', __name__)

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
    print("SINGLE FILM", film.to_dict())

    return film.to_dict();
