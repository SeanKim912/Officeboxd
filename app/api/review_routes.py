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

@review_routes.route('/edit', methods=['PUT'])
@login_required
def edit_review():
    request_body = request.get_json()
    review_id = request_body['id']

    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        to_update_review = Review.query.get(review_id)

        to_update_review.watched = form.data['watched']
        to_update_review.liked = form.data['liked']
        to_update_review.rating = form.data['rating']
        to_update_review.review_text = form.data['review_text']

        db.session.commit()

        return to_update_review.to_dict()
    return {}

@review_routes.route('/delete', methods=['DELETE'])
@login_required
def delete_review():
    request_body = request.get_json()
    review_id = request_body['id']

    review = Review.query.get(review_id)

    db.session.delete(review)
    db.session.commit()

    return {}
