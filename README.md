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
