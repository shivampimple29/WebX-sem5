from flask import Flask, render_template, request, redirect, url_for, flash
app = Flask(__name__)
app.secret_key = 'super_secret_key_for_security'
@app.route('/', methods=['GET', 'POST'])
def feedback_form():
    if request.method == 'POST':
        # Retrieve form data using the 'name' attributes from HTML
        name = request.form.get('username')
        email = request.form.get('email')
        rating = request.form.get('rating')
        comments = request.form.get('comments')

        # Basic Server-Side Validation
        if not name or not email or not comments:
            flash("All fields are required!", "error")
            return redirect(url_for('feedback_form'))
        print(f"Feedback Received: {name} ({email}) | Rating: {rating} | Comments: {comments}")
        return redirect(url_for('ack', name=name))
    return render_template('index.html')
@app.route('/ack')
def ack():
    name = request.args.get('name', 'Guest')
    return render_template('ack.html', name=name)
if __name__ == '__main__':
    app.run(debug=True)