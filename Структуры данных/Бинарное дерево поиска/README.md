# Бинарное дерево поиска

Структурированная, упорядоченная структура данных

У каждого из элементов бинарного дерева поиска есть дочерние элементы. Особенностью этих элементов есть ровно 2 дочерних элемента.

Ключевая особенность бинарного дерева заключается в том, что у любого из элементов его левый дочерних элемент меньшего его самого, а правый больше его самого.

Вершина (root) - корень дерева

Высота - кол-во уровней у дерева

Можно посчитать кол-во элементов в дереве - N = 2^H. Но формула будет правдива только тогда, когда дерево будет сбалансированно

Дерево называется сбалансированных, если для любой его вершины v высота левого и правого поддерева, выходящих из v, отличаются не более чем на 1.

