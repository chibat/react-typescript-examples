
```
wget http://cdnjs.cloudflare.com/ajax/libs/react/0.14.0/react-dom.min.js -P web/vendor/js
wget http://cdnjs.cloudflare.com/ajax/libs/react/0.14.0/react.min.js -P web/vendor/js
wget http://cdnjs.cloudflare.com/ajax/libs/react-router/1.0.2/ReactRouter.min.js -P web/vendor/js
wget http://cdnjs.cloudflare.com/ajax/libs/marked/0.3.5/marked.js -P web/vendor/js
wget http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap.min.css -P web/vendor/bootstrap
wget http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.min.js -P web/vendor/bootstrap
```

```
$ cd src
$ tsd install react-global --save
$ tsd install react-dom --save
$ tsd install react-router --save
$ tsd install jquery --save
$ tsd install bootstrap --save
$ tsd install marked --save
```

```
git add -A && git commit -m '-' && git push -u origin master
```

# publish as web page

```
git checkout gh-pages
git merge master
git push -u origin gh-pages
```

## Development by Atom

### Install Atom

Download Installer.
[https://atom.io/](https://atom.io/)

### packages

* atom-typescript
