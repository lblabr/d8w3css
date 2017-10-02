<?php

/**
 * @file
 * Drupal8 W3CSS Theme.theme.
 *
 * Filename:     drupal8_w3css_theme.theme
 * Website:      http://www.flashwebcenter.com
 * Description:  template
 * Author:       Alaa Haddad http://www.alaahaddad.com.
 */

/**
 * The theme settings.
 */

$form['drupal8_w3css_theme_settings']['w3_colors'] = [
  '#type' => 'details',
  '#title' => t('Advanced Site Colors'),
  '#collapsible' => TRUE,
  '#collapsed' => FALSE,
  '#description'   => t('<table>
<tr>
  <td> </td>
  <th>Copy and paste your desired backgournd color, text color and link color in any region. </th>
 </tr>
  <tr>
    <th>Background Colors:</th>
    <td>w3-red, w3-pink, w3-purple, w3-deep-purple, w3-indigo, w3-blue, w3-light-blue, w3-cyan, w3-aqua, w3-teal, w3-green, w3-light-green, w3-lime, w3-sand, w3-khaki, w3-yellow, w3-amber, w3-orange, w3-deep-orange, w3-blue-grey, w3-brown, w3-light-grey, w3-grey, w3-dark-grey, w3-black, w3-pale-red, w3-pale-yellow, w3-pale-green and w3-pale-blue</td>
  </tr>
  <tr>
    <th>Text Colors:</th>
    <td>w3-text-red, w3-text-pink, w3-text-purple, w3-text-deep-purple, w3-text-indigo, w3-text-blue, w3-text-light-blue, w3-text-cyan, w3-text-aqua, w3-text-teal, w3-text-green, w3-text-light-green, w3-text-lime, w3-text-sand, w3-text-khaki, w3-text-yellow, w3-text-amber, w3-text-orange, w3-text-deep-orange, w3-text-blue-grey, w3-text-brown, w3-text-light-grey, w3-text-grey, w3-text-dark-grey, w3-text-black and w3-text-white</td>
  </tr>
  <tr>
    <th>Link Text Colors:</th>
    <td>w3-link-red, w3-link-pink, w3-link-purple, w3-link-deep-purple, w3-link-indigo, w3-link-blue, w3-link-light-blue, w3-link-cyan, w3-link-aqua, w3-link-teal, w3-link-green, w3-link-light-green, w3-link-lime, w3-link-sand, w3-link-khaki, w3-link-yellow, w3-link-amber, w3-link-orange, w3-link-deep-orange, w3-link-blue-grey, w3-link-brown, w3-link-light-grey, w3-link-grey, w3-link-dark-grey, w3-link-black and w3-link-white</td>
  </tr>
  <tr>
    <th>Link Background Colors:</th>
    <td>w3-link-bg-red, w3-link-bg-green, w3-link-bg-blue, w3-link-bg-yellow, w3-link-bg-white, w3-link-bg-black, w3-link-bg-grey, w3-link-bg-amber, w3-link-bg-aqua, w3-link-bg-light-blue, w3-link-bg-brown, w3-link-bg-cyan, w3-link-bg-blue-grey, w3-link-bg-blue-gray, w3-link-bg-light-green, w3-link-bg-indigo, w3-link-bg-khaki, w3-link-bg-lime, w3-link-bg-orange, w3-link-bg-deep-orange, w3-link-bg-pink, w3-link-bg-purple, w3-link-bg-deep-purple, w3-link-bg-sand, w3-link-bg-teal, w3-link-bg-light-gray, w3-link-bg-light-grey, w3-link-bg-dark-gray, w3-link-bg-dark-grey</td>
  </tr>
  <tr>
    <th>Link Hover Colors:</th>
    <td>w3-link-red-hover, w3-link-green-hover, w3-link-blue-hover, w3-link-yellow-hover, w3-link-white-hover, w3-link-black-hover, w3-link-grey-hover, w3-link-amber-hover, w3-link-aqua-hover, w3-link-light-blue-hover, w3-link-brown-hover, w3-link-cyan-hover, w3-link-blue-grey-hover, w3-link-blue-gray-hover, w3-link-light-green-hover, w3-link-indigo-hover, w3-link-khaki-hover, w3-link-lime-hover, w3-link-orange-hover, w3-link-deep-orange-hover, w3-link-pink-hover, w3-link-purple-hover, w3-link-deep-purple-hover, w3-link-sand-hover, w3-link-teal-hover, w3-link-light-gray-hover, w3-link-light-grey-hover, w3-link-dark-gray-hover, w3-link-dark-grey-hover</td>
  </tr>
  <tr>
    <th>To Disable:</th>
    <td>To disable shadow: w3-box-shadow-0 | To disable border: w3-border-0 | To disable border round: w3-round-0 | To disable margin: w3-margin-0 | To disable padding: w3-padding-0</td>
  </tr>
</table>'),
];

$color_fields = [
  'color_page_wrapper' => 'Page Wrapper',
  'color_header' => 'Header',
  'color_primary_menu' => 'Primary Main Menu',
  'color_welcome_text' => 'Welcome Text',
  'color_highlighted' => 'Highlighted',
  'color_top_container' => 'Top Container Wrapper',
  'color_top_first' => 'Top First',
  'color_top_second' => 'Top Second',
  'color_top_third' => 'Top Third',
  'color_page_title' => 'Page Title',
  'color_main' => 'Main Container Wrapper',
  'color_breadcrumb' => 'Breadcrumb',
  'color_sidebar_first' => 'Left Sidebar',
  'color_content' => 'Main Content',
  'color_sidebar_second' => 'Right Sidebar',
  'color_bottom_container' => 'Bottom Container Wrapper',
  'color_bottom_first' => 'Bottom First',
  'color_bottom_second' => 'Bottom Second',
  'color_bottom_third' => 'Bottom Third',
  'color_bottom_forth' => 'Bottom Forth',
  'color_footer_container' => 'Footer Container Wrapper',
  'color_footer_first' => 'Footer First',
  'color_footer_second' => 'Footer Second',
  'color_footer_third' => 'Footer Third',
  'color_footer_menu' => 'Footer Menu',
  'color_copyright' => 'Copyright',
];
foreach ($color_fields as $field => $label) {
  $form['drupal8_w3css_theme_settings']['w3_colors'][$field] = [
    '#type' => 'textfield',
    '#title' => t($label),
    '#default_value' => theme_get_setting($field),
  ];
}
