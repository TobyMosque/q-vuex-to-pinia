<template>
  <q-card>
    <q-card-section class="text-center text-h6 text-bold">
      <q-skeleton type="text" />
    </q-card-section>
    <q-card-section>
      <q-skeleton type="QInput" />
    </q-card-section>
    <q-separator></q-separator>
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-center">Source</th>
          <th class="text-center">Value (State)</th>
          <th class="text-center">Double (Getter)</th>
          <th class="text-center">Increment (Action)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-center text-bold"><q-skeleton type="text" /></td>
          <td class="text-center"><q-skeleton type="text" /></td>
          <td class="text-center"><q-skeleton type="text" /></td>
          <td class="text-center">
            <q-skeleton dense type="QBtn" />
          </td>
        </tr>
        <tr>
          <td class="text-center text-bold"><q-skeleton type="text" /></td>
          <td class="text-center"><q-skeleton type="text" /></td>
          <td class="text-center"><q-skeleton type="text" /></td>
          <td class="text-center">
            <q-skeleton dense type="QBtn" />
          </td>
        </tr>
        <tr>
          <td class="text-center text-bold"><q-skeleton type="text" /></td>
          <td class="text-center"><q-skeleton type="text" /></td>
          <td class="text-center"><q-skeleton type="text" /></td>
          <td class="text-center">
            <q-skeleton dense type="QBtn" />
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </q-card>
</template>

<script setup></script>
