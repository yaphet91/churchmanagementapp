<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class YouTubeController extends Controller
{
    public function getChannelVideos()
    {
        $apiKey = 'ANASTASIA_YOUTUBE_API_KEY';
        $channelId = 'ANASTASIA_YOUTUBE_CHANNEL_ID';
        $maxResults = 10;

        $client = new Client();
        $response = $client->get('https://www.googleapis.com/youtube/v3/search', [
            'query' => [
                'key' => $apiKey,
                'channelId' => $channelId,
                'part' => 'snippet',
                'order' => 'date',
                'maxResults' => $maxResults
            ]
        ]);

        $videos = json_decode($response->getBody()->getContents(), true);
        return response()->json($videos);
    }
}

