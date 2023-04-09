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

@collection_routes.route('/create', methods=['POST'])
@login_required
def create_collection():
    my_id = current_user.id

    form = CollectionForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_collection = Collection(
            profile_id=my_id,
            name=form.data['name'],
            description=form.data['description'],
            films=form.data['films']
        )

        db.session.add(new_collection)
        db.session.commit()

        return new_collection.to_dict()
