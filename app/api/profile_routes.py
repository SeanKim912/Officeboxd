from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Profile, db

profile_routes = Blueprint('profile', __name__)

@profile_routes.route('/current_user')
@login_required
def self():
    """
    Query for profile of current user and return in a dictionary
    """
    print("HITTING THE ROUTE")

    self_id = current_user.id
    my_profile = Profile.query.filter(Profile.user_id == self_id).one()

    return my_profile.to_dict()
