from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Collection, Profile, Film
from app.forms import CollectionForm

collection_routes = Blueprint('collection', __name__)

@collection_routes.route('/<int:id>')
def collection(id):
    collection = Collection.query.filter(Collection.id == id).one()

    return collection.to_dict()

@collection_routes.route('/<int:id>/all')
def all_collections(id):
    collections = Collection.query.filter(Collection.profile_id == id).all()
    collections_arr = [collection.to_dict() for collection in collections]

    return collections_arr


