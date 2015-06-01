# open-html

指定したディレクトリ以下の HTML ファイルをすべて開くスクリプト。
open-html is the script that opens all HTML files in the given directory.

# インストール – Installation

Node.js が必要なので、まずは Node.js をインストールしてください。
First of all, install Node.js because open-html requires Node.js.

https://nodejs.org/

プロジェクトフォルダをダウンロードし、適当な場所に設置します。ターミナル上から、プロジェクトのルートフォルダで下記のコマンドを順番に実行してください。
Download and put the open-html project folder in your prefer folder. Execute following commands on your terminal.

```bash
npm install
npm install -g
```

# 使い方 - Usage

第2引数に対象とするフォルダーを指定し、第3引数にベースの URL を入力します。
Input the target folder on 2nd argument, base URL on 3rd argument.

```bash
openhtml ./path/to/html/ # 第2引数のみの時は file:/// で開く
openhtml ./path/to/html/ http://localhost/ # http://localhost 以下の html ファイルをすべて開く
```
