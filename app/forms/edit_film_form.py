from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField

class UpdateFilmForm(FlaskForm):
    title = StringField("Title")
    year = IntegerField("Year")
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
