<template>
    <main>
        <CmdWidthLimitationWrapper id="iconfont-overview">
            <h1>CoManD-UI-Iconfonts</h1>
            <p>
                The icons were converted with the great, free <a href="https://icomoon.io/app/" target="icomoon">IcoMoon-App</a>.
                To use an icon add <code>&lt;span class="icon-<em>name</em>"&gt;&lt;/span&gt;</code> in html. The <em>name</em> of an icon is listed below each icon.
                If no readable label/caption is provided, add a tooltip with <code>title="<em>describable text"</em></code> to the <code>&lt;span&gt;</code> for accessibility. <br/>
                All icons (and their tooltips) used in components of the <a href="#">Component Library</a> can be replaced by a property.
                For more details have a look on the property-tab of a certain component inside the
                <a href="#">component documentation</a>.
            </p>
            <div class="flex-container no-gap">
                <CmdFormElement
                    element="input"
                    type="search"
                    id="iconfont-search"
                    labelText="Search icons"
                    placeholder="Search icons"
                    :showLabel="false"
                    :showSearchButton="false"
                    fieldIconClass="icon-search"
                    autofocus="autofocus"
                    v-model="filterIcons"
                />
                <CmdFakeSelect
                    :select-data="listOfIconfonts"
                    type="checkboxOptions"
                    labelText="Search icons"
                    :showLabel="false"
                    class="no-flex"
                    v-model="filterIconsByFont"
                />
            </div>
            <ul class="filter">Available Iconfonts:
                <li><a href="#base-icons">Base ({{ filteredBaseIcons.length }})</a></li>
                <li><a href="#editmode-icons">Editmode ({{ filteredEditmodeIcons.length }})</a></li>
                <li><a href="#logos-icons">Logos ({{ filteredLogosIcons.length }})</a></li>
                <li><a href="#medical-icons">Medical ({{ filteredMedicalIcons.length }})</a></li>
            </ul>
            <h2 id="base-icons">Base Icons</h2>
            <div v-if="filteredBaseIcons.length" class="grid-container-create-columns">
                <div v-for="(iconName, index) in filteredBaseIcons" :key="index" class="icon">
                    <span :class="'icon-' + iconName"></span>
                    <span>{{ iconName }}</span>
                </div>
            </div>
            <p v-else class="system-message warning">No matches found in this font!</p>
            <hr/>
            <h2 id="editmode-icons">Editmode Icons</h2>
            <div v-if="filteredEditmodeIcons.length" class="grid-container-create-columns">
                <div v-for="(iconName, index) in filteredEditmodeIcons" :key="index" class="icon">
                    <span :class="'icon-' + iconName"></span>
                    <span>{{ iconName }}</span>
                </div>
            </div>
            <p  v-else class="system-message warning">No matches found in this font!</p>
            <hr/>
            <h2 id="logos-icons">Logos Icons</h2>
            <div v-if="filteredLogosIcons.length" class="grid-container-create-columns">
                <div v-for="(iconName, index) in filteredLogosIcons" :key="index" class="icon">
                    <span :class="'icon-' + iconName"></span>
                    <span>{{ iconName }}</span>
                </div>
            </div>
            <p v-else class="system-message warning">No matches found in this font!</p>
            <hr/>
            <h2 id="medical-icons">Medical Icons</h2>
            <div v-if="filteredMedicalIcons.length" class="grid-container-create-columns">
                <div v-for="(iconName, index) in filteredMedicalIcons" :key="index" class="icon">
                    <span :class="'icon-' + iconName"></span>
                    <span>{{ iconName }}</span>
                </div>
            </div>
            <p v-else class="system-message warning">No matches found in this font!</p>
        </CmdWidthLimitationWrapper>
    </main>
</template>

<script>
// import data
import baseIcons from "./fonts/base-iconfont/base-icon-classes.json"
import editmodeIcons from "./fonts/editmode-iconfont/editmode-icon-classes.json"
import logosIcons from "./fonts/logos-iconfont/logos-icon-classes.json"
import medicalIcons from "./fonts/medical-iconfont/medical-icon-classes.json"

export default {
    name: "IconFonts",
    data() {
        return {
            filterIcons: "",
            sortedBaseIcons: this.sortIcons(baseIcons),
            sortedEditmodeIcons: this.sortIcons(editmodeIcons),
            sortedLogosIcons: this.sortIcons(logosIcons),
            sortedMedicalIcons: this.sortIcons(medicalIcons),
            filterIconsByFont: [1, 2],
            listOfIconfonts: [
                {
                    text: "Framework Iconfont",
                    value: 1
                },
                {
                    text: "Editmode Iconfont",
                    value: 2
                },
                {
                    text: "Logos Iconfont",
                    value: 3
                },
                {
                    text: "Medical Iconfont",
                    value: 4
                }
            ]
        }
    },
    computed: {
        filteredBaseIcons() {
            return this.filteredIcons(this.sortedBaseIcons)
        },
        filteredEditmodeIcons() {
            return this.filteredIcons(this.sortedEditmodeIcons)
        },
        filteredLogosIcons() {
            return this.filteredIcons(this.sortedLogosIcons)
        },
        filteredMedicalIcons() {
            return this.filteredIcons(this.sortedMedicalIcons)
        }
    },
    methods: {
        filteredIcons(iconFont) {
            const filterTerm = this.filterIcons.trim().toLowerCase()

            if (filterTerm) {
                return iconFont.filter((item) => {
                    return item.toLowerCase().includes(filterTerm)
                })
            }
            return iconFont
        },
        sortIcons(icons) {
            return icons.sort((a, b) => {
                // compare icon-names to sort alphabetical
                return a.localeCompare(b)
            })
        }
    }
}
</script>

<style>
#iconfont-overview {
    .filter {
        margin-top: var(--default-margin);
        display: flex;
        gap: var(--default-gap);
        margin-left: 0;

        li {
            margin: 0;
            list-style-type: none;
        }
    }

    section {
        padding-top: 2rem;

        p code {
            display: inline;
        }

        .icon {
            display: flex;
            flex-direction: column;
            gap: calc(var(--default-gap) / 4);
            align-items: center;
            text-align: center;

            span {
                margin: 0;
                font-size: 1.2rem;
                line-height: 120%;

                &[class*="icon-"] {
                    font-size: 3rem;
                }
            }
        }
    }
}
</style>