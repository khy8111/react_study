import {useState} from "react";
import {
    Heart,
    MessageCircle,
    Send,
    Bookmark,
    MoreHorizontal
} from "lucide-react"

export default function PostCard({

}) {const [commentText, setCommentText] = useState("");

    return(
        <article className="post-card">
            {/* 포스트 헤더 */}
            <div className="post_header">
                <div className="post-header-left">
                    <img 
                        src="이미지 경로"
                        alr="이미지"
                        className="post-header-avatar"
                    />
                    <div>
                        <div className="post-header-username" style={{cursor: "pointer"}}>
                            유저네임
                        </div>
                        <div className="post-header-location">경기도 안양시 만안구</div>
                    </div>
                </div>
                <div className="post-header-right">
                    <MoreHorizontal style={{cursor:"pointer"}}/>
                </div>
            </div>
            {/* 포스트 콘텐츠 */}
            <div className="post-image-container">
                <img 
                    src="이미지 경로"
                    alt="콘텐츠이미지"
                    className="post-image"
                />
                <Heart className="post-double-click-heart animate" fill="#ffffff"/>
            </div>
            {/* 포스트 푸터 */}
            <div className="post-footer">
                {/* 공유 바 */}
                <div className="post-action-bar">
                    <div className="post-action-left">
                        <button
                            className="post-action-btn"
                            arial-label="Like post"
                        >
                            <Heart/>
                        </button>
                        <button
                            className="post-action-btn"    
                            arial-label="Comment post"
                        >
                            <MessageCircle/>
                        </button>
                        <button
                            className="post-action-btn"
                            arial-label="Share post"
                        >
                            <Send />
                        </button>
                    </div>
                    
                    {/* 좋아요 */}
                    <div className="post-likes-count">
                        좋아요 1개
                    </div>

                    {/* 캡션 */}
                    <div className="post-caption">
                        <span className="post-caption-username">
                            포스트유저네임
                        </span>
                        캡션내용
                        {/* 캡션내용 긴경우 더보기 */}
                        <button
                            className="post-caption-more"
                        >
                            더보기
                        </button>
                    </div>

                    {/* 퀵피드가 뭐냐 */}

                    {/* 타임스탬프 */}
                    <div className="post-timestamp">
                        포스트 시간
                    </div>
                </div>
            </div>
            {/* 댓글달기 */}
            <form className="post-add-comment-bar">
                <input
                    type="text"
                    placeholder="댓글 달기..."
                    className="post-comment-input"
                    value="코멘트 내용"
                    onChange={(e)=> setCommentText(e.target.value)}
                />
                <button
                    type="submit"
                    className="post-comment-submit-btn"
                    
                >
                    게시
                </button>
            </form>
        </article>
    );

}