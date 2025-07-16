from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>/profile')
@login_required
def user_profile(id):
    users = User.query.get(id)
    if users:
        return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>/flow')
@login_required
def get_flow(id):
    users = User.filter_by(User.id >= 1)
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>/notes', methods=['GET'])
def user_notes(id):
    user = User.query.get(id)
    if user:
        return user.to_dict()
    else:
        print(f'user is broken in notes route')
