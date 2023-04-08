from flask.cli import AppGroup
from .users import seed_users, undo_users
from .actors import seed_actors, undo_actors
from .films_actors import seed_films_actors, undo_films_actors
from .films import seed_films, undo_films
from .profiles import seed_profiles, undo_profiles
from .reviews import seed_reviews, undo_reviews
from .collections import seed_collections, undo_collections

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_collections()
        undo_films_actors()
        undo_actors()
        undo_reviews()
        undo_films()
        undo_profiles()
        undo_users()

    seed_users()
    seed_profiles()
    seed_films()
    seed_reviews()
    seed_actors()
    seed_films_actors()
    seed_collections()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_collections()
    undo_films_actors()
    undo_actors()
    undo_reviews()
    undo_films()
    undo_profiles()
    undo_users()

    # Add other undo functions here
