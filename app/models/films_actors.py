from .db import db, environment, SCHEMA, add_prefix_for_prod

films_actors = db.Table(
    "films_actors",
    db.Model.metadata,
    db.Column(
        "film_id",
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("films.id")),
        primary_key=True
    ),
    db.Column(
        "actor_id",
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("actors.id")),
        primary_key=True
    )
)

if environment == "production":
    films_actors.schema = SCHEMA
