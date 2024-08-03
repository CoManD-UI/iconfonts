<template>
    <main>
        <CmdWidthLimitationWrapper id="iconfont-overview">
            <h1>Iconfonts</h1>
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
            <h2>Framework Icons</h2>
            <div class="grid-container-create-columns">
                <div v-for="(icon, index) in filteredFrameworkIcons" :key="index" class="icon">
                    <span :class="icon.iconClass"></span>
                    <span>{{ icon.name }}</span>
                </div>
            </div>
            <hr/>
            <h2>Editmode Icons</h2>
            <div class="grid-container-create-columns">
                <div v-for="(icon, index) in filteredEditmodeIcons" :key="index" class="icon">
                    <span :class="icon.iconClass"></span>
                    <span>{{ icon.name }}</span>
                </div>
            </div>
            <hr/>
            <h2>Logos Icons</h2>
            <div class="grid-container-create-columns">
                <div v-for="(icon, index) in filteredLogosIcons" :key="index" class="icon">
                    <span :class="icon.iconClass"></span>
                    <span>{{ icon.name }}</span>
                </div>
            </div>
        </CmdWidthLimitationWrapper>
    </main>
</template>

<script>
// import data
//import baseIcons from "./src/fonts/base-iconfont/base-iconfont.json"
//import editmodeIcons from "./src/fonts/editmode-iconfont/editmode-iconfont.json"
import logosIcons from "./src/fonts/logos-iconfont/logos-icon-classes.json"

export default {
    name: "IconFont",
    data() {
        return {
            filterIcons: "",
            //sortedFrameworkIcons: this.sortIcons(baseIcons),
            //sortedEditmodeIcons: this.sortIcons(editmodeIcons),
            sortedLogosIcons: this.sortIcons(logosIcons),
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
                }
            ]
        }
    },
    computed: {
        filteredFrameworkIcons() {
            return this.filteredIcons(this.sortedFrameworkIcons)
        },
        filteredEditmodeIcons() {
            return this.filteredIcons(this.sortedEditmodeIcons)
        },
        filteredLogosIcons() {
            return this.filteredIcons(this.sortedLogosIcons)
        }
    },
    methods: {
        filteredIcons(iconFont) {
            const filterTerm = this.filterIcons.trim().toLowerCase()

            if (filterTerm) {
                return iconFont.filter((item) => {
                    return item.name.toLowerCase().includes(filterTerm)
                })
            }
            return iconFont
        },
        sortIcons(icons) {
            return icons.sort((a, b) => {
                // compare icon-names to sort alphabetical
                return a.name.localeCompare(b.name)
            })
        }
    }
}
</script>

<style>
#iconfont-overview {
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