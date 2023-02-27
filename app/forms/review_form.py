from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, IntegerField

class ReviewForm(FlaskForm):
    watched = BooleanField('Watched')
    liked = BooleanField('Liked')
    rating = IntegerField('Rating')
    review_text = StringField('Written Review')
