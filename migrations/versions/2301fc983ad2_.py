"""empty message

Revision ID: 2301fc983ad2
Revises:
Create Date: 2023-02-27 11:09:26.254757

"""
from alembic import op
import sqlalchemy as sa

import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")

# revision identifiers, used by Alembic.
revision = '2301fc983ad2'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('actors',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('bio', sa.String(length=500), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE actors SET SCHEMA {SCHEMA};")
    op.create_table('films',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=50), nullable=True),
    sa.Column('year', sa.Integer(), nullable=True),
    sa.Column('poster', sa.String(length=1000), nullable=True),
    sa.Column('still', sa.String(length=1000), nullable=True),
    sa.Column('tagline', sa.String(length=140), nullable=True),
    sa.Column('synopsis', sa.String(length=500), nullable=True),
    sa.Column('runtime', sa.Integer(), nullable=True),
    sa.Column('director', sa.String(length=50), nullable=True),
    sa.Column('studio', sa.String(length=50), nullable=True),
    sa.Column('genre', sa.String(length=20), nullable=True),
    sa.Column('language', sa.String(length=20), nullable=True),
    sa.Column('country', sa.String(length=20), nullable=True),
    sa.Column('producer', sa.String(length=50), nullable=True),
    sa.Column('writer', sa.String(length=50), nullable=True),
    sa.Column('editor', sa.String(length=50), nullable=True),
    sa.Column('cinematographer', sa.String(length=50), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE films SET SCHEMA {SCHEMA};")
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE users SET SCHEMA {SCHEMA};")
    op.create_table('films_actors',
    sa.Column('film_id', sa.Integer(), nullable=False),
    sa.Column('actor_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['actor_id'], ['actors.id'], ),
    sa.ForeignKeyConstraint(['film_id'], ['films.id'], ),
    sa.PrimaryKeyConstraint('film_id', 'actor_id')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE films_actors SET SCHEMA {SCHEMA};")
    op.create_table('profiles',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('avatar_url', sa.String(length=1000), nullable=True),
    sa.Column('location', sa.String(length=50), nullable=True),
    sa.Column('pronoun', sa.String(length=20), nullable=True),
    sa.Column('bio', sa.String(length=500), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE profiles SET SCHEMA {SCHEMA};")
    op.create_table('reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('profile_id', sa.Integer(), nullable=False),
    sa.Column('film_id', sa.Integer(), nullable=False),
    sa.Column('watched', sa.Boolean(), nullable=True),
    sa.Column('liked', sa.Boolean(), nullable=True),
    sa.Column('rating', sa.Integer(), nullable=True),
    sa.Column('review_text', sa.String(length=10000), nullable=True),
    sa.ForeignKeyConstraint(['film_id'], ['films.id'], ),
    sa.ForeignKeyConstraint(['profile_id'], ['profiles.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE reviews SET SCHEMA {SCHEMA};")
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('reviews')
    op.drop_table('profiles')
    op.drop_table('films_actors')
    op.drop_table('users')
    op.drop_table('films')
    op.drop_table('actors')
    # ### end Alembic commands ###
