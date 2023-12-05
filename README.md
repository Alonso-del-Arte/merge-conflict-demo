# Merge conflict demo

This is a demonstration of merge conflicts in Git.

In this demonstration, the problem might arise because of these two lines in 
js/Circle.js:

```
        // TODO: Look up formula for the circumference of a circle
        this.circumference = Math.PI + this.area
```

Then Alice comes along. She deletes the To Do comment and amends the 
circumference formula like this:

```
        this.circumference = 2 * Math.PI + this.radius;
```

Just a little bit later, Bob also corrects the circumference formula, but he 
neglects to delete the To Do comment.

```
        this.circumference = 2.0 * Math.PI * this.radius
```

If Alice's edits are merged first, Bob's edits can't be merged automatically.
