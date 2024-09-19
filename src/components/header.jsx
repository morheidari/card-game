export default function Header({score,bestScore}){
    return(<div className="header">
        <h1 className="game-title">Memory Card</h1>
        <div className="score-board">
            <div className="score"><span>score:</span><div className="score-number">{score}</div></div>
            <div className="best-score"><span>best-score:</span><div className="score-number">{bestScore}</div></div>
        </div>
    </div>)
}