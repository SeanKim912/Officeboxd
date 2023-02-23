from .db import db, environment, SCHEMA, add_prefix_for_prod
from .films_actors import films_actors

class Actor (db.Model):
    __tablename__ = 'actors'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    bio = db.Column(db.String(500))

    filmography = db.relationship("Film", secondary=films_actors, back_populates="actor")

    def to_dict(self):
        return{
            'id': self.id,
            'name': self.name,
            'bio': self.bio
        }
