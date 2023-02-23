from .db import db, environment, SCHEMA, add_prefix_for_prod
from .films_actors import films_actors

class Film (db.Model):
    __tablename__ = 'films'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50))
    year = db.Column(db.Integer)
    poster = db.Column(db.String(1000))
    still = db.Column(db.String(1000))
    tagline = db.Column(db.String(140))
    synopsis = db.Column(db.String(500))
    runtime = db.Column(db.Integer)
    director = db.Column(db.String(50))
    studio = db.Column(db.String(20))
    genre = db.Column(db.String(20))
    language = db.Column(db.String(20))
    country = db.Column(db.String(20))
    producer = db.Column(db.String(50))
    writer = db.Column(db.String(50))
    editor = db.Column(db.String(50))
    cinematographer = db.Column(db.String(50))

    film_review = db.relationship("Review", back_populates='film')
    actor = db.relationship("Actor", secondary=films_actors, back_populates='filmography')

    def to_dict(self):
        return{
            'id': self.id,
            'title': self.title,
            'year': self.year,
            'poster': self.poster,
            'still': self.still,
            'tagline': self.tagline,
            'synopsis': self.synopsis,
            'runtime': self.runtime,
            'director': self.director,
            'studio': self.studio,
            'genre': self.genre,
            'language': self.language,
            'country': self.country,
            'producer': self.producer,
            'writer': self.writer,
            'editor': self.editor,
            'cinematographer': self.cinematographer
        }
