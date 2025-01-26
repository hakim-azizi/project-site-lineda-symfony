<?php
// src/Controller/api/ContentsController.php

namespace App\Controller\api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class ContentsController extends AbstractController
{
    public function getContents(): Response
    {
        $filePath = __DIR__ . '/../api/contents.json';

        if (!file_exists($filePath)) {
            return new JsonResponse(['error' => 'File not found'], 404);
        }

        $jsonContent = file_get_contents($filePath);

        return new JsonResponse(json_decode($jsonContent, true));
    }
}
