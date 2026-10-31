<?php
/**
 * Plugin Name: Dakter Achen Sitemap Fix
 * Plugin URI: https://dakterachen.com
 * Description: Intercepts /sitemap.xml and /wp-sitemap.xml to serve clean valid XML without WordPress redirects or 404 errors.
 * Version: 1.0.0
 * Author: Dakter Achen Engineering
 */

if (!defined('ABSPATH')) {
    exit;
}

add_action('init', function () {
    $request_uri = parse_url($_SERVER['REQUEST_URI'] ?? '', PHP_URL_PATH);
    $sitemaps = [
        '/sitemap.xml',
        '/sitemap_index.xml',
        '/wp-sitemap.xml',
        '/wp-sitemap-posts-page-1.xml',
        '/wp-sitemap-posts-post-1.xml',
        '/wp-sitemap-taxonomies-category-1.xml',
        '/wp-sitemap-users-1.xml'
    ];

    if (in_array(strtolower($request_uri), $sitemaps, true)) {
        $filename = basename($request_uri);
        $file_path = ABSPATH . $filename;

        header('Content-Type: application/xml; charset=utf-8', true, 200);
        header('Cache-Control: public, max-age=3600, s-maxage=86400');
        header('X-Robots-Tag: noindex, follow');
        header('X-Content-Type-Options: nosniff');

        if (file_exists($file_path)) {
            readfile($file_path);
        } else {
            // Fetch live sitemap from the Dakter Achen applet
            $response = wp_remote_get('https://ais-pre-c6xmglhpygp4mtnwxyh2al-315185213524.asia-southeast1.run.app' . $request_uri, [
                'timeout' => 15,
                'sslverify' => true,
            ]);

            if (!is_wp_error($response) && wp_remote_retrieve_response_code($response) === 200) {
                echo wp_remote_retrieve_body($response);
            } else {
                echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
                echo "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n";
                echo "  <url>\n";
                echo "    <loc>https://dakterachen.com/</loc>\n";
                echo "    <lastmod>" . date('Y-m-d') . "</lastmod>\n";
                echo "    <changefreq>daily</changefreq>\n";
                echo "    <priority>1.0</priority>\n";
                echo "  </url>\n";
                echo "</urlset>";
            }
        }
        exit;
    }
}, 1);
