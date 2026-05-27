import {useState, useEffect} from "react";
import { X, Play, Pause } from "lucide-react";

export default function StoriesCarousel({

}) {
    return (
        <>
            <div className="stories-container">
                {/* 최근 스토리 */}
                <div className="story-circle">
                    <div className="story-avatar-wrapper">
                        <img
                            src="이미지 경로"
                            alt="내 스토리"
                            className="story-avatar"
                        >
                        </img>
                    </div>
                    <span className="story-username">내 스토리</span>
                </div>

                {/* 친구 스토리 (for문 조건문 추가하기) */}
                <div
                    key=""
                    className="story-circle"
                >
                    <div className="story-avatar-wrapper">
                        <img 
                            src="이미지 경로"
                            alt="이미지"
                            className="story-avatar"
                        />
                        <span className="story-username">스토리유저네임</span>
                    </div>
                </div>
            </div>
        
        </>
    );
}