#!/usr/bin/env python3
import json
import subprocess
import urllib.request
import urllib.error

def get_github_token():
    """Get GitHub token from git credentials"""
    try:
        with open('/home/user/.git-credentials', 'r') as f:
            cred_line = f.read().strip()
            # Extract token from URL format
            if '@github.com' in cred_line:
                token = cred_line.split('x-access-token:')[1].split('@')[0]
                return token
    except:
        pass
    return None

def create_pull_request(token, owner, repo, title, body, head, base):
    """Create a pull request using GitHub API"""
    url = f'https://api.github.com/repos/{owner}/{repo}/pulls'
    
    data = {
        'title': title,
        'body': body,
        'head': head,
        'base': base
    }
    
    headers = {
        'Authorization': f'token {token}',
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
    }
    
    request = urllib.request.Request(
        url,
        data=json.dumps(data).encode('utf-8'),
        headers=headers,
        method='POST'
    )
    
    try:
        response = urllib.request.urlopen(request)
        result = json.loads(response.read().decode('utf-8'))
        return result
    except urllib.error.HTTPError as e:
        error_body = e.read().decode('utf-8')
        print(f"Error creating PR: {e.code}")
        print(f"Error details: {error_body}")
        return None

# Main execution
token = get_github_token()
if not token:
    print("Could not find GitHub token")
    exit(1)

title = "Fix: Configurar deploy correto para GitHub Pages e corrigir tela branca"
body = """## 🐛 Correção do Problema de Tela Branca no GitHub Pages

### 📋 Problema Identificado
O site estava aparecendo com tela branca quando acessado através do GitHub Pages porque:
- Os caminhos dos recursos estavam apontando para a raiz (/) ao invés do subdiretório do projeto (/rea-website/)
- Faltava configuração específica para deploy no GitHub Pages

### ✅ Soluções Implementadas

#### 1. **Configuração do Vite para GitHub Pages**
- Adicionado `base: '/rea-website/'` no vite.config.js
- Isso garante que todos os recursos sejam carregados com o caminho correto

#### 2. **Instalação e Configuração do gh-pages**
- Instalado o pacote gh-pages como devDependency
- Adicionados scripts de deploy no package.json:
  - `predeploy`: Executa o build antes do deploy
  - `deploy`: Publica a pasta dist no GitHub Pages

#### 3. **Configuração de Roteamento SPA**
- Criado arquivo 404.html para redirecionar rotas não encontradas
- Adicionado arquivo .nojekyll para evitar processamento Jekyll do GitHub

#### 4. **Build com Caminhos Corretos**
- Rebuild do projeto com as novas configurações
- Todos os assets agora apontam para /rea-website/assets/

### 🚀 Deploy Realizado
- Deploy feito com sucesso usando `npm run deploy`
- Site agora está funcionando corretamente em: https://guilhermedev17.github.io/rea-website

### 📝 Como fazer futuros deploys
```bash
npm run deploy
```

### ✨ Resultado
- ✅ Site não apresenta mais tela branca
- ✅ Todos os recursos carregam corretamente
- ✅ Navegação funciona como esperado
- ✅ Deploy automatizado configurado"""

result = create_pull_request(
    token=token,
    owner='Guilhermedev17',
    repo='rea-website',
    title=title,
    body=body,
    head='main',
    base='branch-82'
)

if result:
    print(f"✅ Pull Request criado com sucesso!")
    print(f"📎 URL do PR: {result['html_url']}")
    print(f"📊 Número do PR: #{result['number']}")
    print(f"🔗 Link: {result['html_url']}")
else:
    print("❌ Falha ao criar o Pull Request")