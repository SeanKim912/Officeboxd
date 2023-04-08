from .db import db, environment, SCHEMA, add_prefix_for_prod

class Collection (db.Model):
    __tablename__ = 'collections'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    profile_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('profiles.id')), nullable=False)
    name = db.Column(db.String(100))
    description = db.Column(db.String(500))
    films = db.Column(db.String(500))

    profile = db.relationship("Profile", back_populates='profile_collections')

    def to_dict(self):
        return{
            'id': self.id,
            'profile_id': self.profile_id,
            'name': self.name,
            'description': self.description,
            'films': self.films
        }
