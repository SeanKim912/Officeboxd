from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SelectField

class ProfileForm(FlaskForm):
    avatar_url = StringField('Profile Picture')
    bio = StringField('Bio')
    location = StringField('Location')
    pronoun = StringField('Pronoun')
