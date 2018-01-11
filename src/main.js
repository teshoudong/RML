class Main {
  constructor() {
    const rml = this.getRml();
    this.createContainer();
    this.createScript(`
      class RMLMain extends React.Component {
        state = {
          ${rml.state}
        }
        
        render() {
          return (
            <div>
              ${rml.content}
            </div>
          );
        }
      }
    
      ReactDOM.render(
        <RMLMain/>,
        document.getElementById('container')
      )
    `);
  }

  createContainer() {
    const container = document.createElement('div');
    container.id = 'container';
    document.body.appendChild(container);
  }

  createScript(content) {
    const script = document.createElement('script');
    script.innerHTML = content;
    script.type = 'text/babel';
    document.body.appendChild(script);
  }

  getRml() {
    let rml = '';
    for (let i = 0; i < document.scripts.length; i++) {
      if (document.scripts[i].type === 'text/rml') {
        rml = document.scripts[i].innerHTML;
      }
    }
    const content = rml.replace(/\<State[\s\S]*?\/\>/gi, '');
    const match = rml.match(/\<State\s*declare=\{\{((\s|\S)*?)\}\}\/\>/);
    const state = match ? match[1] : '';
    return {
      content, 
      state
    };
  }
}

new Main();
