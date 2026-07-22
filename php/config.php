<?php
declare(strict_types=1);

// RuntimebuzzArticle SDK configuration

class RuntimebuzzArticleConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "RuntimebuzzArticle",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://runtimebuzz.com",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "read_finder_index" => [],
                    "search" => [],
                ],
            ],
            "entity" => [
        'read_finder_index' => [
          'fields' => [],
          'name' => 'read_finder_index',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'header' => [
                      [
                        'active' => true,
                        'kind' => 'header',
                        'name' => 'if_none_match',
                        'orig' => 'if_none_match',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/api/read-finder-index.json',
                  'parts' => [
                    'api',
                    'read-finder-index.json',
                  ],
                  'select' => [
                    'exist' => [
                      'if_none_match',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'search' => [
          'fields' => [],
          'name' => 'search',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => 5,
                        'kind' => 'query',
                        'name' => 'limit',
                        'orig' => 'limit',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 'cursor',
                        'kind' => 'query',
                        'name' => 'q',
                        'orig' => 'q',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/api/search',
                  'parts' => [
                    'api',
                    'search',
                  ],
                  'select' => [
                    'exist' => [
                      'limit',
                      'q',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return RuntimebuzzArticleFeatures::make_feature($name);
    }
}
