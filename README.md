# Getting started

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <script type="text/rml">
        <h1>Hello, world!</h1>
    </script>

    <script src="./dist/vender.js"></script>
    <script src="./dist/main.js"></script>
</body>
</html>
```

# Using State

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <script type="text/rml">
        <State declare={{
            content: 'Hello, world'
        }}/>

        <h1>{this.state.content}</h1>

        <button onClick={() => this.setState({content: 'Hello, rml'})}>click</button>
    </script>

    <script src="./dist/vender.js"></script>
    <script src="./dist/main.js"></script>
</body>
</html>
```

# Using Fetch

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <script type="text/rml">
        <State declare={{
            content: 'Hello, world'
        }}/>

        <Fetch url={'//localhost:8080/content'} onDone={data => this.setState({content: data})}/>

        <h1>{this.state.content}</h1>
    </script>

    <script src="./dist/vender.js"></script>
    <script src="./dist/fetch.js"></script>
    <script src="./dist/main.js"></script>
</body>
</html>
```

# Using Action

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <script type="text/rml">
        <Action label="hello">
            <Modal title="hello" onOk={modal => modal.close()}>
                Hello, world
            </Modal>
        </Action>
    </script>

    <script src="./dist/vender.js"></script>
    <script src="./dist/fetch.js"></script>
    <script src="./dist/main.js"></script>
</body>
</html>
```

# Using Ant Design Components

More information about Ant Design, please [click](https://ant.design)


```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <script type="text/rml">
        <Card title="card">
            <Button>Button</Button>
            <Input name="name" placeholder="input"/>
            <Select>
                <Select.Option value="option1">Option1</Select.Option>
                <Select.Option value="option2">Option2</Select.Option>
                <Select.Option value="option3">Option3</Select.Option>
            </Select>
        </Card>
    </script>

    <script src="./dist/vender.js"></script>
    <script src="./dist/button.js"></script>
    <script src="./dist/input.js"></script>
    <script src="./dist/card.js"></script>
    <script src="./dist/select.js"></script>
    <script src="./dist/main.js"></script>
</body>
</html>
```

# Using Router

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <script type="text/rml" name="page">
        <h1>Page</h1>
    </script>

    <script type="text/rml" name="list">
        <h1>List</h1>
    </script>

    <script type="text/rml">
        <Router>
            <Switch>
                <Route exact path="/" template="page"></Route>
                <Route exact path="/list" template="list"></Route>
            </Switch>
        </Router>
    </script>

    <script src="./dist/vender.js"></script>
    <script src="./dist/router.js"></script>
    <script src="./dist/main.js"></script>
</body>
</html>
```

