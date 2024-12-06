import { Button } from "frames.js/next";
import { frames } from "./frames";

const handleRequest = frames(async (ctx) => {

    const { reactionId } = ctx.searchParams;

    return {
        image: (
            <div tw="bg-yellow-500 text-black w-full h-full flex flex-col justify-center items-center p-4">
                <h2 tw="text-4xl font-extrabold mb-8 text-center">🎉 Reaction Frame 🎉</h2>
                <p tw="text-3xl font-extrabold text-center mt-4">Reaction Id: {reactionId}</p>
                <div tw="mt-6 flex space-x-4">
                    <span tw="text-6xl mr-8">❤️</span>
                    <span tw="text-6xl mr-8">👍</span>
                    <span tw="text-6xl mr-8">🎉</span>
                    <span tw="text-6xl">👏</span>
                </div>
            </div>
        ),
        buttons: [
            <Button action="tx" target={"/txSendReaction"} post_url={"/txSendReaction/success"}>
                Send Reaction
            </Button>,
            <Button action="post" target={"/txSendReaction"}>
                Click to React
            </Button>
        ],
        textInput: (
            "Enter Reaction amount here"
        )
    }
});

export const GET = handleRequest;
export const POST = handleRequest;
