from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed, FileRequired
from wtforms import StringField, IntegerField
from app.s3_helpers import ALLOWED_EXTENSIONS

class FilmForm(FlaskForm):
    title = StringField("Title")
    year = IntegerField("Year")
    poster = FileField("Image File", validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])
    still = FileField("Image File", validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])
    tagline = StringField("Tagline")
    synopsis = StringField("Synopsis")
    runtime = IntegerField("Runtime")
    director = StringField("Director")
    studio = StringField("Studio")
    genre = StringField("Genre")
    language = StringField("Language")
    country = StringField("Country")
    producer = StringField("Producer")
    writer = StringField("Writer")
    editor = StringField("Editor")
    cinematographer = StringField("Cinematographer")
