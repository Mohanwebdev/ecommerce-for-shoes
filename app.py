import pymongo
import os
from dotenv import load_dotenv

load_dotenv()


from datetime import datetime
import certifi

# from pymongo import MongoClient

from flask import Flask, redirect, render_template, url_for, request, flash

app = Flask(__name__)

app.secret_key = "abc"

db_name= os.getenv('DB_NAME')
db_pass= os.getenv('DB_PASS')



ca = certifi.where()

client = pymongo.MongoClient(
    f"mongodb+srv://{db_name}:{db_pass}@cluster0.bn8mc.mongodb.net/shoeDB?retryWrites=true&w=majority", tlsCAFile=ca)

# mongodb+srv://<username>:<password>@cluster0.bn8mc.mongodb.net/?retryWrites=true&w=majority

# client = MongoClient('mongodb://localhost:27017/')

db = client['shoeDB']

collection = db['login']

review = db['feedback']

products = db['product']


current_month = datetime.now().strftime('%m')
current_day = datetime.now().strftime('%d')
current_year_full = datetime.now().strftime('%Y')


# home route


@app.route("/")
def home():

    return render_template("index.html")

# shop route


@app.route("/shop")
def shop():
    return render_template("shop.html")

# men route


@app.route("/men")
def men():
    return render_template("men.html")

# women route


@app.route("/women")
def women():
    return render_template("women.html")

# kids route


@app.route("/kids")
def kids():
    return render_template("kids.html")

# blog route


@app.route("/blog")
def blog():
    return render_template("blog.html")

# about route


@app.route("/about")
def about():
    return render_template("about.html")

# contact route


@app.route("/contact")
def contact():
    return render_template("contact.html")

# cart route


@app.route("/cart", methods=["POST", "GET"])
def cart():
    if request.method == "POST":
        pname = request.form['productname']
        price = request.form['price']

        print(userName)
        products.insert_one({"username": userName, "productname": pname, "price": price,
                            "year": current_year_full, "month": current_month, "day": current_day})
        return render_template("cart.html")
    else:
        return render_template("cart.html")

# product pages route


@app.route("/sproduct")
def sproduct():
    return render_template("sproduct.html")


@app.route("/sproduct2")
def sproduct2():
    return render_template("sproduct2.html")


@app.route("/sproduct3")
def sproduct3():
    return render_template("sproduct3.html")


@app.route("/sproduct4")
def sproduct4():
    return render_template("sproduct4.html")


@app.route("/sproduct5")
def sproduct5():
    return render_template("sproduct5.html")


@app.route("/sproduct6")
def sproduct6():
    return render_template("sproduct6.html")


@app.route("/sproduct7")
def sproduct7():
    return render_template("sproduct7.html")


@app.route("/sproduct8")
def sproduct8():
    return render_template("sproduct8.html")


# admin rpute

@app.route("/admin")
def admin():
    return render_template("admin.html")

# month report


month = "all"


def update_mon(mon):
    globals().update(month=mon)


@app.route("/monthreport", methods=["POST", "GET"])
def monthreport():
    if request.method == "POST":
        month_of_yr = request.form['mon']

        update_mon(month_of_yr)

        return redirect(url_for('monthreport'))

    else:

        if month == "all":
            results = products.find({})
        else:
            results = products.find({"month": month})

        return render_template("monthrpt.html", results=results)


# product report


product_details = "all"


def update_pro(proo):
    globals().update(product_details=proo)


@app.route("/productreport", methods=["POST", "GET"])
def productreport():
    if request.method == "POST":
        prod_det = request.form['prod']

        update_pro(prod_det)

        return redirect(url_for('productreport'))

    else:

        if product_details == "all":
            results = products.find({})
        else:
            results = products.find({"productname": product_details})

        return render_template("productrpt.html", results=results)

    # feedback display module

    # {"uname": username, "pname": productname, "msg": message}


feed_details = "all"


def update_feed(proo):
    globals().update(feed_details=proo)


@app.route("/feed", methods=["POST", "GET"])
def feed():
    if request.method == "POST":
        feed_det = request.form['prod']

        update_feed(feed_det)

        return redirect(url_for('feed'))

    else:

        if feed_details == "all":
            results = review.find({})
        else:
            results = review.find({"pname": feed_details})

        return render_template("feedback.html", results=results)

# to get the username for storing it in database


userName = "hey"


def update_foo(namee):
    globals().update(userName=namee)

# login route


@app.route("/account", methods=["POST", "GET"])
def account():
    if request.method == "POST":
        uname = request.form['user']
        pwd = request.form['pass']
        data = collection.find_one({"username": uname})
        if(pwd == data['password']):
            update_foo(uname)
            if(uname == "admin"):
                return redirect(url_for('admin'))
            flash("Welcome "+uname)
            return redirect(url_for('home'))
        else:
            error = "invalid username or password"

        return render_template('account.html', error=error)
    else:
        return render_template("account.html")

# signin


@app.route("/signup", methods=["POST", "GET"])
def signup():
    if request.method == "POST":
        uname = request.form['user']
        if request.form['pass'] == request.form['confirmpass']:
            pwd = request.form['pass']
            collection.insert_one({"username": uname, "password": pwd})
            msg = "Account created successfully"
            return render_template('signup.html', msg=msg)
        else:
            msg = "password and confirm password are not same"
            return render_template('signup.html', msg=msg)

    else:
        return render_template("signup.html")

# forgot password


@app.route("/forgotpass", methods=["POST", "GET"])
def forgotpass():
    if request.method == "POST":
        uname = request.form['user']
        pwd = request.form['pass']
        collection.update_one({"username": uname}, {"$set": {
            "password": pwd
        }})
        msg = "Password changed successfully"
        return render_template('forgotpass.html', msg=msg)
    else:
        return render_template("forgotpass.html")

    # feedback route


@app.route("/feedback", methods=["POST", "GET"])
def feedback():
    if request.method == "POST":
        username = request.form['uname']
        productname = request.form['pname']
        message = request.form['msg']
        review.insert_one(
            {"uname": username, "pname": productname, "msg": message})
        flash("Feedback sent successfully")
        return redirect(url_for('sproduct'))


if __name__ == "__main__":
    app.run(debug=True)
