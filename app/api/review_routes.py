from flask import Blueprint
from flask_login import login_required, current_user
from app.models import db, Film, Review

review_routes = Blueprint('review', __name__)

@review_routes.route('/<int:id>')
@login_required
def my_review(id):

    return {"My review text"}
