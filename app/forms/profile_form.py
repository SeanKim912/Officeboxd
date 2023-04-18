from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed, FileRequired
from wtforms import StringField, SubmitField
from app.s3_helpers import ALLOWED_EXTENSIONS

class ProfileForm(FlaskForm):
    image = FileField("Image File", validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])
    bio = StringField('Bio')
    location = StringField('Location')
    pronoun = StringField('Pronoun')
