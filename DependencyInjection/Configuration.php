<?php

namespace Warezgibzzz\CustomMapFormTypeBundle\DependencyInjection;

use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

/**
 * This is the class that validates and merges configuration from your app/config files
 *
 * To learn more see {@link http://symfony.com/doc/current/cookbook/bundles/extension.html#cookbook-bundles-extension-config-class}
 */
class Configuration implements ConfigurationInterface
{
    /**
     * {@inheritdoc}
     */
    public function getConfigTreeBuilder()
    {
        $treeBuilder = new TreeBuilder();
        $rootNode = $treeBuilder->root('warezgibzzz_custom_map');

        $rootNode
            ->children()
                ->arrayNode('default')
                    ->addDefaultsIfNotSet()

                    ->children()
                        ->scalarNode('x')
                            ->cannotBeEmpty()
                            ->defaultValue(10)
                        ->end()

                        ->scalarNode('y')
                            ->cannotBeEmpty()
                            ->defaultValue(10)
                        ->end()
                    ->end()
                ->end()

                ->arrayNode('parameters')
                    ->addDefaultsIfNotSet()

                    ->children()
                        ->scalarNode('image')
                            ->defaultValue('http://placehold.it/500x500.png')
                        ->end()
                    ->end()
                ->end()
            ->end()
        ;

        return $treeBuilder;
    }
}
