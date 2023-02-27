from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Film, Review, Profile
from app.forms import ReviewForm

review_routes = Blueprint('review', __name__)

@review_routes.route('/<int:id>')
@login_required
def my_review(id):
    my_id = current_user.id
    profile = Profile.query.filter(Profile.user_id == my_id).one()
    review = Review.query.filter(Review.profile_id == profile.id, Review.film_id == id).one()

    return review.to_dict()

@review_routes.route('/all')
def all_reviews():
    review_list = Review.query.all()
    review_arr = [review.to_dict() for review in review_list]

    return review_arr

@review_routes.route('/create', methods=['POST'])
@login_required
def create_review():
    my_id = current_user.id
    profile = Profile.query.filter(Profile.user_id == my_id).one()
    request_body = request.get_json()
    movie_id = request_body['film_id']

    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_review = Review(
            profile_id=profile.id,
            film_id= movie_id,
            watched=form.data['watched'],
            liked=form.data['liked'],
            rating=form.data['rating'],
            review_text=form.data['review_text']
        )

        db.session.add(new_review)
        db.session.commit()

        return new_review.to_dict()
