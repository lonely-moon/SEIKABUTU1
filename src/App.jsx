import { useState } from 'react'
//import {useState} from 'react'
//定義ーReactという道具箱からState(棚)を取り出す命令
//用途ーデータの変化を保存し、画面を自動更新させる機能を使えるようにするため

export default function App() {
    {/*export default function 'react'/*}
    {/*定義ーアプリの本体を宣言し、外部（画面）へ出荷する命令*/}
    {/*用途ーここから下の{}の中身を実際のスマホ画面として映し出すため*/}

    const [count,setCount] =useState(0)
    //useState(0)
    //定義ーデータを記憶する「棚」を作る
    //用途ー現在の数字(count)を保存し、リモコン(setCount)で数字を変えるため。
    //今回の例ー最初は0からスタートするように設定

    return (
        //return ()
        //定義ー画面に表示する「見た目」を返す境界線
        //用途ーここから下にHTMLのようなコードを書いて、画面を作っていくため

        <div>
        {/*</div>
        定義ー要素をグループにする箱
        用途ー見出しとボタンをセットにするため*/}

        <h1>数字:{count}</h1>
        {/*{count}
        定義ー棚の中身を表示する書き方
        用途ー今の数字の(0や1)を画面に描き出すため*/}

        <button onClick={()=>setCount(count+1)}>
            プラス
        </button>
        {/*意味ーもう一つのスイッチ。クリック時に数字を1減らす（マイナスする）命令*/}
        <button onClick={() => setCount(count -1)}>
        マイナス
        </button>
        {/*役割ー押すと数字を1減らす(-1)のように棚の中身を書き換えるスイッチ*/}
        </div>
    );
}


//use State