from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user, logout_user
from app.models import Profile, User, db
from app.forms import ProfileForm

profile_routes = Blueprint('profile', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@profile_routes.route('/current_user')
@login_required
def self():
    """
    Query for profile of current user and return in a dictionary
    """

    self_id = current_user.id
    my_profile = Profile.query.filter(Profile.user_id == self_id).one()

    return my_profile.to_dict()


@profile_routes.route('/create', methods=['POST'])
def create_profile():
    form = ProfileForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user_profile = Profile(
            user_id=current_user.id,
            avatar_url=form.data['avatar_url'],
            bio=form.data['bio'],
            location=form.data['location'],
            pronoun=form.data['pronoun']
        )

        db.session.add(user_profile)
        db.session.commit()

        return user_profile.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@profile_routes.route('/edit', methods=['PUT'])
def edit_profile():
    form = ProfileForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        to_update_profile = Profile.query.filter(
            Profile.user_id == current_user.id).first()

        to_update_profile.user_id = current_user.id
        to_update_profile.avatar_url = form.data['avatar_url']
        to_update_profile.bio = form.data['bio']
        to_update_profile.location = form.data['location']
        to_update_profile.pronoun = form.data['pronoun']

        db.session.commit()

        return to_update_profile.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@profile_routes.route('/delete', methods=['DELETE'])
@login_required
def delete_user():
    my_id = current_user.id
    me = User.query.get(my_id)

    db.session.delete(me)
    db.session.commit()

    me_again = User.query.get(my_id)
    if not me_again:
        logout_user()
        return {'message': 'User deleted'}, 200

    return {'message': 'Unable to delete user'}
