import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

const CallRoom = () => {
    const { RoomCode } = useParams()
    const meetingRef = useRef(null)
    const [userName, setUserName] = useState('')
    const [joined, setJoined] = useState(false)

    const handleJoin = () => {
        if (userName.trim()) {
            setJoined(true)
            myMeeting(meetingRef.current)
        }
    }

    const myMeeting = async (element) => {
        const appID = 1940279792
        const serverSecret = "80c83a037aedae123cb7cf00daa88655"
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            RoomCode,
            Date.now().toString(),
            userName
        )

        const zp = ZegoUIKitPrebuilt.create(kitToken)

        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference
            },
        })
    }

    return (
        <div className="relative w-full h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center">
            {!joined && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Enter Your Name to Join</h2>
                        <input
                            type="text"
                            className="mb-4 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Your Name"
                            value={userName}
                            onChange={e => setUserName(e.target.value)}
                        />
                        <button
                            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                            onClick={handleJoin}
                        >
                            Join Meeting
                        </button>
                    </div>
                </div>
            )}
            <div
                ref={meetingRef}
                className="w-full h-full rounded-xl shadow-2xl overflow-hidden border-4 border-white"
            ></div>
        </div>
    )
}

export default CallRoom
