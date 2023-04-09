from flask_wtf import FlaskForm
from wtforms import StringField

class CollectionForm(FlaskForm):
    name = StringField('Name')
    description = StringField('Description')
    films = StringField('Films')
