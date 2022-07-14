var foo = "bar";
var bar = "bar";


// git rebase --soft HEAD~3
// git commit 

/**
 I like that Richa and Nitin are working together on a ticket.  That doesn't usually happen, I often find that a developer that starts a pr doesn't want others to work on their pr. Thank you for caring more about completing the work over who did the work

 What I want to see in the next time I review this:

 1. The title and the description in the pr are changed. See my comments around this
 2. add inline comments about the values you're setting for the various z-indexes
 3. change the color in page-column to be a gray from ui/styles
 4. Delete the Cell component in page-header.js
 5. squash all of the commits in this pr to a single commit. There's a few ways of doing this, and the way I'm used to might be a little hard, so here's another way:

 After you've addressed 1 to 4 and commited those changes, you'll probably have 8 commits on this pr
 `git rebase --soft HEAD~8`
 `git add .`