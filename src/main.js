class Main {
    constructor() {
        const scripts = this.getRmls();
        this.createContainer();
        this.createScript(`
            ${scripts.rmls.map(rml => `
                class $${rml.name} extends React.Component {
                    constructor(props) {
                        super(props);
                        this.state = {
                            ${rml.state}
                        };
                    }
                  
                    render() {
                        return (
                            <div>
                                ${rml.content}
                            </div>
                        );
                    }
                }
            `).join('')}
            
            class $RMLMain extends React.Component {
                constructor(props) {
                    super(props);
                    this.state = {
                        ${scripts.main.state}
                    };
                }
                
                getTemplate(name) {
                    return $RMLMain['$' + name];
                }
              
                render() {
                    return (
                        <div>
                            ${scripts.main.content}
                        </div>
                    );
                }
            }
            
            ${scripts.rmls.map(rml => `
                $RMLMain.$${rml.name} = $${rml.name};
            `).join('')}
            
            ReactDOM.render(
                <$RMLMain/>,
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

    getState(rml) {
        const content = rml.replace(/\<State[\s\S]*?\/\>/gi, '');
        const match = rml.match(/\<State\s*declare=\{\{((\s|\S)*?)\}\}\/\>/);
        const state = match ? match[1] : '';
        return {
            content,
            state
        };
    }

    getRmls() {
        let rmls = [];
        let mainRml = '';
        for (let i = 0; i < document.scripts.length; i++) {
            const script = document.scripts[i];
            const name = script.getAttribute('name');
            if (script.type === 'text/rml' && !name) {
                mainRml += script.innerHTML;
            } else if (script.type === 'text/rml' && name) {
                const {state, content} = this.getState(script.innerHTML);
                rmls.push({
                    name,
                    content,
                    state
                });
            }
        }

        const scripts = {
            main: mainRml && this.getState(mainRml),
            rmls
        };

        return scripts;
    }
}

new Main();
