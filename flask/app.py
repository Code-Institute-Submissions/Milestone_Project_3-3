import os
from flask import Flask, render_template, jsonify, request, session, redirect, url_for
from flask_pymongo import PyMongo
from passlib.hash import pbkdf2_sha256
from functools import wraps
import uuid

# Flask App

app = Flask(__name__)
app.secret_key = b'y\xe0\xa0\x1e\xf5\x83#\x90\xa7\x0f\xea\x8b\xfcf\x01*'

# Classes
class User:
    

    def start_session(self, user):
        del user['password']
        session['logged_in'] = True
        session['user'] = user
        
        return jsonify(user), 200

    def signup(self):

        # Create the User Object
        user = {
            '_id': uuid.uuid4().hex,
            'name': request.form.get('name').lower(),
            'email': request.form.get('email').lower(),
            'password': request.form.get('password')
        }

        # Encrypt the password
        user['password'] = pbkdf2_sha256.encrypt(user['password'])

        # Check for existing email adress
        if users.find_one({'email': user['email'].lower()}):
            return jsonify({'error': 'Email adress already in use'}), 400

        if users.insert_one(user):
            return self.start_session(user)

        return jsonify({"error": "Signup_failed"}), 400

    def signout(self):
        session.clear()
        return redirect(url_for('home_page'))

    def login(self):
        email = request.form.get('email').lower()
        user = users.find_one({'email': email})

        if user and pbkdf2_sha256.verify(request.form.get('password'), user['password']):
            return self.start_session(user)
        
        return jsonify({'error': 'Invalid login credentials'}), 401


# Database
app.config['MONGO_DBNAME'] = 'Recipe_Pot'
app.config['MONGO_URI'] = os.getenv('MONGO_URI')

mongo = PyMongo(app)
users = mongo.db.user_login_system


# Decorators
def login_required(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if 'logged_in' in session:
            return f(*args, **kwargs)
        else:
            return redirect(url_for('home_page'))
        
    return wrap


# Routes
@app.route('/')
@app.route('/home/')
def home_page():
    return render_template('index.html')


@app.route('/about/')
def about_page():
    return render_template('about.html')


@app.route('/contact_us/')
def contact_page():
    return render_template('contact.html')


@app.route('/sign_up/')
def signup_page():
    return render_template('signup.html')


@app.route('/user/signup', methods=['GET', 'POST'])
def signup():
    user = User()
    return user.signup()


@app.route('/login/')
def login_page():
    return render_template('login.html')

@app.route('/user/login', methods=['POST'])
def login():
    user = User()
    return user.login()

@app.route('/profile_page/')
@login_required
def profile_page():
    return render_template('profile.html')


@app.route('/profile_page/signout')
def sign_out():
    user = User()
    return user.signout()


if __name__ == '__main__':
    app.run(host=os.getenv('IP'),
            port=int(os.getenv('PORT')),
            debug=True)
