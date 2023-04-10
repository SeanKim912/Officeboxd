from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import Length, DataRequired

class CollectionForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    description = StringField('Description', validators=[DataRequired()])
    films = StringField('Films', validators=[DataRequired(), Length(3,150)])
