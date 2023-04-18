from .db import db, environment, SCHEMA, add_prefix_for_prod

class Profile (db.Model):
    __tablename__ = 'profiles'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('users.id')), nullable=False)
    avatar_url = db.Column(db.String(1000))
    location = db.Column(db.String(50))
    pronoun = db.Column(db.String(20))
    bio = db.Column(db.String(500))

    user = db.relationship('User', back_populates='profile')
    profile_reviews = db.relationship('Review', back_populates='profile', cascade="all, delete")
    profile_collections = db.relationship('Collection', back_populates='profile')

    def to_dict(self):
        return{
            'id': self.id,
            'user_id': self.user_id,
            'avatar_url': self.avatar_url,
            'location': self.location,
            'pronoun': self.pronoun,
            'bio': self.bio,
            'user': self.user.to_dict()
        }
