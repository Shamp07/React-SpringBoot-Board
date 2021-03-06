var path = require('path');
 
module.exports = {
    context: path.resolve(__dirname, 'src/main/jsx/'),
    entry: {
        main: './MainPage.jsx',
        loginmodal : './login/LoginModal.jsx',
        alertmodal : './util/AlertModal.jsx',
        loadingmodal : './util/loadingModal.jsx',
        menubar: './menu/Menubar.jsx',
        board : './board/Board.jsx',
        boardlist : './board/BoardList.jsx',
        boardposting : './board/BoardPosting.jsx',
        boardpost : './board/BoardPost.jsx',
        boardpostview : './board/BoardPostView.jsx',
        boardreplyform : './board/reply/BoardReplyForm.jsx',
        boardreply : "./board/reply/BoardReply.jsx",
        menucategory : './menu/MenuCategory.jsx'
    },
    devtool: 'sourcemaps',
    cache: true,
    output: {
        path: __dirname,
        filename: './src/main/webapp/js/react/[name].bundle.js'
    },
    mode: 'none',
    module: {
        rules: [ {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [ '@babel/preset-env',{
                        plugins: [
                            [
                                "@babel/plugin-proposal-class-properties"
                            ]
                        ],
                    }, '@babel/preset-react' ]
                }
            }
        }, {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        } ]
    }
};