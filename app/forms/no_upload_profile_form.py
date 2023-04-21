from flask_wtf import FlaskForm
from wtforms import StringField

class NoUploadProfileForm(FlaskForm):
    image = StringField('Image')
    bio = StringField('Bio')
    location = StringField('Location')
    pronoun = StringField('Pronoun')
