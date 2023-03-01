from .db import db, environment, SCHEMA, add_prefix_for_prod

class Review (db.Model):
    __tablename__ = 'reviews'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    profile_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('profiles.id')), nullable=False)
    film_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('films.id')), nullable=False)
    watched = db.Column(db.Boolean)
    liked = db.Column(db.Boolean)
    rating = db.Column(db.Integer)
    review_text = db.Column(db.String(10000))

    profile = db.relationship("Profile", back_populates='profile_reviews')
    film = db.relationship("Film", back_populates='film_review')

    def to_dict(self):
        return{
            'id': self.id,
            'profile_id': self.profile_id,
            'film_id': self.film_id,
            'watched': self.watched,
            'liked': self.liked,
            'rating': self.rating,
            'review_text': self.review_text,
            'profile': self.profile.to_dict(),
            'film': self.film.to_dict()
        }
